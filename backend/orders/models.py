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
    
# class Transaction(models.Model):
#     name = models.CharField(max_length=100)
#     amount = models.IntegerField()
#     order_id = models.CharField(max_length=100,blank=True, null=True)
#     razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
#     paid = models.BooleanField(default=False)

#     def __str__(self):
#         return self.name
        

    

# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)

# class Order(models.Model):
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     order_id = models.CharField(max_length=100)
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     products = models.ManyToManyField(Product, through='OrderItem')

# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField()
    