from rest_framework import serializers
from monitoreo.models import *

class SerializadorUsuario(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'compania', 'correo', 'contrasena')

class SerializadorCompania(serializers.ModelSerializer):
    class Meta:
        model = Compania
        fields = ('id', 'nombre')

class SerializadorSemaforo(serializers.ModelSerializer):
    class Meta:
        model = Semaforo
        fields = ('id', 'estado', 'ultima_interrupcion', 'reinicio_ciclo', 'recibio_interrupcion', 'inicio_interrupcion', 'semaforo_replica')

class SerializadorCompaniaAmbulancia(serializers.ModelSerializer):
    class Meta:
        model = CompaniaAmbulancia
        fields = ('id', 'nombre', 'privada', 'publica')

class SerializadoAmbulancia(serializers.ModelSerializer):
    class Meta:
        model = Ambulancia
        fields = ('id', 'compania', 'placa', 'conductor', 'tipo', 'estado')

class SerializadorEmergencia(serializers.ModelSerializer):
    class Meta:
        model = Emergencia
        fields = ('id', 'ambulancia', 'ubicacion', 'estado', 'persona_afectada', 'persona_reporta')