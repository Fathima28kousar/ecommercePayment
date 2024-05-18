from django.contrib import admin
from .models import Customer


class CustomerAdmin(admin.ModelAdmin):
    list_display = ['address', 'firstName', 'lastName','emails','pincode','apartment','phone']

admin.site.register(Customer,CustomerAdmin)
# admin.site.register(Transaction)

