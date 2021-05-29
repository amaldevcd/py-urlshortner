from django.shortcuts import render
from .models import Url
import uuid
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,'index.html')

def create(request):
    if request.method == 'POST':
        url = request.POST['link']
        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=url, lid=uid)
        new_url.save()
        return HttpResponse(uid)