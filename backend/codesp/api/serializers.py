from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['matricula', 'email', 'password', 'nome', 'telefone', 'tipo']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            matricula=validated_data['matricula'],
            email=validated_data['email'],
            nome=validated_data['nome'],
            telefone=validated_data['telefone'],
            tipo=validated_data['tipo'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user