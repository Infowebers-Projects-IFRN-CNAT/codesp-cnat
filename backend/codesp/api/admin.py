from django.contrib import admin
from .models import CustomUser, Material, Local, Emprestimo, EmprestimoMaterial, Multa

admin.site.register(CustomUser)
admin.site.register(Material)
admin.site.register(Local)
admin.site.register(EmprestimoMaterial)
admin.site.register(Emprestimo)
admin.site.register(Multa)