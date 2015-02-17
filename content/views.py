import json
from urlparse import parse_qsl
from django.http import HttpResponse, HttpResponseBadRequest
from django.views.generic import TemplateView, View

COMMENTS_DATA = [
    {"author": "Pete Hunt", "text": "This is one comment"},
    {"author": "Jordan Walke", "text": "This is another comment"},
    {"author": "Michael Stepanovic", "text": "Shut the fuck up"}
]


class HomePage(TemplateView):
    template_name = 'content/home_page.html'


class CommentsAPI(View):

    def get_data(self):
        # index = random.choice(range(1, len(COMMENTS_DATA) + 1))
        # return json.dumps(COMMENTS_DATA[:index])
        return json.dumps(COMMENTS_DATA)

    def get(self, request, *args, **kwargs):
        return HttpResponse(self.get_data(), content_type='application/json')

    def post(self, request, *args, **kwargs):
        try:
            COMMENTS_DATA.append(dict(parse_qsl(request.body)))
            return self.get(request, *args, **kwargs)
        except:
            return HttpResponseBadRequest('nada', content_type='application/json')
