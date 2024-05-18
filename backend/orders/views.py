from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
# import json  # Import json module to parse JSON data
from .models import *
from .serializers import CustomerSerializer
from rest_framework import viewsets
# import razorpay
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.serializers import ValidationError
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.decorators import api_view




# @api_view(['POST'])
# def start_payment(request):
#     # request.data is coming from frontend
#     amount = request.data['amount']
#     name = request.data['name']

#     client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))
    

#     payment = client.order.create({
#         'amount': int(float(amount)) * 100,
#         'currency': 'INR',
#         'payment_capture': '1'})
    

#     order_id = payment['id']
#     order_status = payment['status']
#     if order_status == 'created':
#         order = Transaction.objects.create(
#             name=name,
#             amount=amount,
#             order_id = order_id)
#         print(order)
#         serializer = TransactionSerializer(order)

#     data = {
#         "payment": payment,
#         "order": serializer.data
#     }
#     print(data)
    
#     return Response(data)


# @api_view(['POST'])
# def handle_payment_success(request):
#     # request.data is coming from frontend
#     res = json.loads(request.data["response"])

#     ord_id = ""
#     raz_pay_id = ""
#     raz_signature = ""

#     data = {}

#     for key in res.keys():
#         if key == 'razorpay_order_id':
#             # data['razorpay_order_id'] = val
#             ord_id = res[key]
#         elif key == 'razorpay_payment_id':
#             # data['razorpay_payment_id'] = val
#             raz_pay_id = res[key]
#         elif key == 'razorpay_signature':
#             # data['razorpay_signature'] = val
#             raz_signature = res[key]
            

#     order = Transaction.objects.filter(razorpay_payment_id=ord_id).first()

#     data = {
#         'razorpay_order_id': ord_id,
#         'razorpay_payment_id': raz_pay_id,
#         'razorpay_signature': raz_signature
#     }

    
#     client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))
#     check = client.utility.verify_payment_signature(data)

#     print(check)
#     if check is not None:
#         print("Redirect to error url or error page")
#         return Response({'error': 'Something went wrong'})
    
#     if order:
#         order.paid = True
#         order.save()
#     else:
#         return Response({'error': 'Transaction not found'}, status=status.HTTP_404_NOT_FOUND)
    
   

#     res_data = {
#     'message': 'payment successfully received!'
#     }
#     print(res_data)
#     return Response(res_data)


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


# class CreateOrderAPIView(APIView):
#     def post(self, request):
#         name = request.data.get('name')
#         amount = int(request.data.get('amount')) * 100

#         client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))

#         try:
#             payment = client.order.create({
#                 'amount': amount,
#                 'currency': 'INR',
#                 'payment_capture': '1'
#             })

#             order_id = payment['id']
#             order_status = payment['status']

#             if order_status == 'created':
#                 transaction = Transaction(
#                     name=name,
#                     amount=amount,
#                     order_id=order_id,
#                 )
#                 transaction.save()

#             return Response({'payment': payment}, status=status.HTTP_201_CREATED)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# class PaymentSuccessAPIView(APIView):
#     def post(self, request):
#         data = request.data
#         client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))

#         try:
#             razorpay_order_id = data.get('razorpay_order_id')
#             razorpay_payment_id = data.get('razorpay_payment_id')
#             razorpay_signature = data.get('razorpay_signature')

#             params_dict = {
#                 'razorpay_order_id': razorpay_order_id,
#                 'razorpay_payment_id': razorpay_payment_id,
#                 'razorpay_signature': razorpay_signature
#             }

#             status = client.utility.verify_payment_signature(params_dict)

#             transaction = Transaction.objects.filter(order_id=razorpay_order_id).first()
#             if transaction:
#                 transaction.razorpay_payment_id = razorpay_payment_id
#                 transaction.paid = True
#                 transaction.save()

#             return Response({'status': True})
#         except Exception as e:
#             return Response({'status': False, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)