from rest_framework import status, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import CustomUser



## AUTENTICAÇÃO

@swagger_auto_schema(
    method='post',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'matricula': openapi.Schema(type=openapi.TYPE_STRING),
            'email': openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.TYPE_STRING),
            'nome': openapi.Schema(type=openapi.TYPE_STRING),
            'telefone': openapi.Schema(type=openapi.TYPE_STRING),
            'tipo': openapi.Schema(type=openapi.TYPE_STRING),
        },
        required=['matricula', 'email', 'password', 'nome', 'telefone', 'tipo'],
    ),
    responses={200: 'OK', 400: 'Bad Request'},
)
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@swagger_auto_schema(
    method='post',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'matricula': openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.TYPE_STRING),
        },
        required=['matricula', 'password'],
    ),
    responses={200: 'OK', 401: 'Unauthorized'},
)
@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        matricula = request.data.get('matricula')
        password = request.data.get('password')

        user = None

        if '@' in matricula:
            try:
                user = CustomUser.objects.get(email=matricula)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=matricula, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        
        return Response({'error': 'Dados invalidos'}, status=status.HTTP_401_UNAUTHORIZED)

@swagger_auto_schema(
    method='post',
    responses={200: 'OK', 500: 'Internal Server Error'},
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            request.user.auth_token.delete()
            return Response({'message': 'Logout realizado com sucesso.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)