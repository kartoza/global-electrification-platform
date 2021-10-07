from django.contrib import admin
from .models.map_slug import MapSlugMapping


class MapSlugMappingAdmin(admin.ModelAdmin):
    list_display = ('map', 'slug', 'featured')
    list_editable = ('featured',)


admin.site.register(MapSlugMapping, MapSlugMappingAdmin)
