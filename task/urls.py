from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^home$', views.home, name='home'),
    url(r'^table$', views.table, name='table'),
    url(r'^form$', views.formtest, name='form'),
]