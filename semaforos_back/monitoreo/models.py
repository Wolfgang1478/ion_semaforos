from django.db import models

# Create your models here.

class Compania(models.Model):
    nombre = models.CharField(max_length = 100)

    def __str__(self):
        return self.nombre.__str__()

class Usuario(models.Model):
    compania = models.ForeignKey(Compania, on_delete = models.CASCADE)
    correo = models.CharField(max_length = 100)
    contrasena = models.CharField(max_length = 100)

    def __str__(self):
        return self.compania.nombre.__str__() + ': ' + self.correo.__str__()

class Semaforo(models.Model):
    estado = models.CharField(max_length = 1)
    descripcion = models.CharField(max_length = 100)
    ultima_interrupcion = models.DateTimeField(null = True, blank = True)
    reinicio_ciclo = models.DateTimeField(null = True, blank = True)
    recibio_interrupcion = models.CharField(max_length = 2, null = True, blank = True)
    inicio_interrupcion = models.CharField(max_length = 2, null = True, blank = True)
    semaforo_replica = models.CharField(max_length = 100, null = True, blank = True)

    def __str__(self):
        return self.descripcion.__str__()

class CompaniaAmbulancia(models.Model):
    nombre = models.CharField(max_length = 100)
    privada = models.CharField(max_length = 1)
    publica = models.CharField(max_length = 1)

    def __str__(self):
        return self.nombre.__str__()

class Ambulancia(models.Model):
    compania = models.ForeignKey(CompaniaAmbulancia, on_delete = models.CASCADE)
    placa = models.CharField(max_length = 100, default = 'AAA000')
    conductor = models.CharField(max_length = 100)
    tipo = models.CharField(max_length = 100)
    estado = models.CharField(max_length = 100, default = 'Inactiva')

    def __str__(self):
        return self.compania.nombre.__str__() + ': ' + self.placa.__str__() + ', ' + self.conductor.__str__()

class Emergencia(models.Model):
    ambulancia = models.ForeignKey(Ambulancia, on_delete = models.CASCADE)
    ubicacion = models.CharField(max_length = 100)
    estado = models.CharField(max_length = 100)
    persona_afectada = models.CharField(max_length = 100, null = True, blank = True)
    persona_reporta = models.CharField(max_length = 100, null = True, blank = True)

    def __str__(self):
        return self.ambulancia.placa.__str__() + ': ' + self.persona_afectada.__str__()