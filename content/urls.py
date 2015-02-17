from django.conf.urls import patterns, url

from .views import HomePage, CommentsAPI

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'react.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', HomePage.as_view(), name="home-page"),
    url(r'^comments/', CommentsAPI.as_view(), name="comments")
)
