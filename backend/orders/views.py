from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from .models import *
from .serializers import CustomerSerializer
from rest_framework import viewsets



class CustomerView(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


def validate_checkout(request):
    if request.method == 'POST':
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        emails = request.POST.get('emails')
        pincode = request.POST.get('pincode')
        apartment = request.POST.get('apartment')
        address = request.POST.get('address')
        phone = request.POST.get('phone')

        errors = {}
        if not firstName:
            errors['firstName'] = 'First name is required'
        if not lastName:
            errors['lastName'] = 'Last name is required'
        if not emails:
             errors['emails'] = 'Last name is required'
        if not pincode:
            errors['pincode'] = 'Pincode is required'
        if not apartment:
            errors['apartment'] = 'Apartment name is required'
        if not address:
            errors['address'] = 'Address is required'
        if not phone:
            errors['phone'] = 'Phone is required'
        
        if errors:
            return JsonResponse({'errors': errors}, status=400)  # Return validation errors
        else:
            customer = Customer.objects.create(
                firstName=firstName,
                lastName=lastName,
                emails=emails,
                pincode=pincode,
                apartment=apartment,
                address=address,
                phone=phone
            )
            return JsonResponse({'success': True,'id': customer.id})   # Form data is valid

    else:
        return HttpResponse('Something went wrong')


