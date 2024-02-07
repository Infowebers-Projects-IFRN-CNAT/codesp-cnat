from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class CustomUser(AbstractUser):
    ADMIN = "admin"
    ALUNO = "aluno"
    TIPO_USER_CHOICES = {
        ADMIN: "Administrador",
        ALUNO: "Aluno",
    }
    
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=11)
    data_registro = models.DateTimeField(default=timezone.now)
    ultima_alteracao = models.DateTimeField(default=timezone.now)
    ultimo_login = models.DateTimeField(blank=True, null=True)
    matricula = models.CharField(max_length=14, unique=True)
    tipo = models.CharField(max_length=5, choices=TIPO_USER_CHOICES, default=ALUNO)
    username = models.CharField(max_length=1, blank=True)

    USERNAME_FIELD = 'matricula'
    REQUIRED_FIELDS = ['nome', 'email']

    def __str__(self):
        return self.nome

class Material (models.Model):
    nome = models.CharField(max_length=100)
    slug = models.CharField(max_length=155)

    def __str__(self):
        return self.nome
    
class Local (models.Model):
    nome = models.CharField(max_length=100)
    slug = models.CharField(max_length=155)

    def __str__(self):
        return self.nome

class Emprestimo (models.Model):
    S, R, E, ES, EP, EA, EPA = "S", "R", "E", "ES", "EP", "EA", "EPA"

    STATUS_EMPRESTIMO_CHOICES = {
        S: "Solicitado",
        R: "Recusado",
        E: "Emprestado",
        ES: "Entregue com sucesso",
        EP: "Entregue com prejuízo",
        EA: "Entregue com atraso",
        EPA: "Entregue com prejuízo e atraso",
    }

    L, M, A = "L", "M", "A"

    TIPO_EMPRESTIMO_CHOICES = {
        L: "Local",
        M: "Material",
        A: "Ambos",
    }

    data_emprestimo = models.DateTimeField()
    data_recebimento = models.DateTimeField()
    status = models.CharField(max_length=3, choices=STATUS_EMPRESTIMO_CHOICES, default=S)
    tipo = models.CharField(max_length=1, choices=TIPO_EMPRESTIMO_CHOICES)
    fk_funcionario = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="emprestimo_func")
    fk_comodatario = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="emprestimo_como")
    fk_local = models.ForeignKey(Local, on_delete=models.CASCADE)
    mk_emprestimo_material = models.ManyToManyField(Material, through="EmprestimoMaterial")

    def __str__(self):
        return f"{self.status} - {self.data_emprestimo} - {self.data_recebimento}"
    
class EmprestimoMaterial (models.Model):
    recebido = models.BooleanField(default=False)
    fk_emprestimo = models.ForeignKey(Emprestimo, on_delete=models.CASCADE)
    fk_material = models.ForeignKey(Material, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('fk_emprestimo', 'fk_material')

    def __str__(self):
        return f"{self.recebido} - {self.fk_emprestimo} - {self.fk_material}"

class Multa (models.Model):
    motivo = models.CharField(max_length=255)
    valor = models.FloatField()
    data_registro = models.DateTimeField()
    data_pagamento = models.DateTimeField()
    fk_emprestimo = models.ForeignKey(Emprestimo, on_delete=models.CASCADE)