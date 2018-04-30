# Generated by Django 2.0.4 on 2018-04-30 02:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('monitoreo', '0003_auto_20180429_2332'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ambulancia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('placa', models.CharField(default='AAA000', max_length=100)),
                ('conductor', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=100)),
                ('estado', models.CharField(default='Inactiva', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='CompaniaAmbulancia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('privada', models.CharField(max_length=1)),
                ('publica', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Emergencia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ubicacion', models.CharField(max_length=100)),
                ('estado', models.CharField(max_length=100)),
                ('persona_afectada', models.CharField(blank=True, max_length=100, null=True)),
                ('persona_reporta', models.CharField(blank=True, max_length=100, null=True)),
                ('ambulancia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monitoreo.Ambulancia')),
            ],
        ),
        migrations.AddField(
            model_name='ambulancia',
            name='compania',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monitoreo.CompaniaAmbulancia'),
        ),
    ]
