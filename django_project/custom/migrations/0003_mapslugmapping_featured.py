# Generated by Django 2.2.16 on 2021-10-07 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custom', '0002_blogindexpage_blogpage'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapslugmapping',
            name='featured',
            field=models.BooleanField(default=False, help_text='Should this resource be showed in home page?', verbose_name='Featured'),
        ),
    ]