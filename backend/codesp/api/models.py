from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class CustomUser(AbstractUser):
    ADMIN = "admin"
    ALUNO = "aluno"
    TIPO_CHOICES = {
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
    tipo = models.CharField(max_length=5, choices=TIPO_CHOICES, default=ALUNO)
    username = models.CharField(max_length=1, blank=True)

    USERNAME_FIELD = 'matricula'
    REQUIRED_FIELDS = ['nome', 'email']

    def __str__(self):
        return self.nome