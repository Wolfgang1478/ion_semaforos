from django.contrib import admin
from monitoreo.models import *

# Register your models here.

admin.site.register(Usuario)
admin.site.register(Semaforo)
admin.site.register(Compania)
admin.site.register(Ambulancia)
admin.site.register(CompaniaAmbulancia)
admin.site.register(Emergencia)
