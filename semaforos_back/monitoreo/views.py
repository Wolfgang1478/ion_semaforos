from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from monitoreo.models import *
from monitoreo.seralizers import *
# Create your views here.

@api_view(['GET', 'POST'])
def usuarios(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        user = Usuario.objects.all()
        serializador = SerializadorUsuario(user, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadorUsuario(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def ambulancias(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        amb = Ambulancia.objects.all()
        serializador = SerializadoAmbulancia(amb, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadoAmbulancia(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def semaforos(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        sema = Semaforo.objects.all()
        serializador = SerializadorSemaforo(sema, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadorSemaforo(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def companias(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        comp = Compania.objects.all()
        serializador = SerializadorCompania(comp, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadorCompania(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def companiasAmbulancia(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        comp = CompaniaAmbulancia.objects.all()
        serializador = SerializadorCompaniaAmbulancia(comp, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadorCompaniaAmbulancia(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def emergencias(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        emer = Emergencia.objects.all()
        serializador = SerializadorEmergencia(emer, many=True)
        return Response(serializador.data)

    elif request.method == 'POST':
        serializador = SerializadorEmergencia(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)