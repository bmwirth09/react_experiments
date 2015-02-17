import json
from django.http import HttpResponse, HttpResponseBadRequest
from django.views.generic import TemplateView, View

COMMENTS_DATA = [
    {"author": "Mike Laderman", "text": "Later man"},
    {"author": "Mark Stenquist", "text": "Stank the tank"},
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
            COMMENTS_DATA.append(json.loads(request.body))
            return self.get(request, *args, **kwargs)
        except:
            return HttpResponseBadRequest('nada', content_type='application/json')
