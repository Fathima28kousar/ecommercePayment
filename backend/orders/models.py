from django.db import models
# import uuid


class Customer(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    emails = models.EmailField(max_length=100)
    pincode = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    apartment = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    
    def __str__(self):
        return self.firstName
    



    