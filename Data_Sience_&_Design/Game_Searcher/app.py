
from flask import Flask, render_template, request


def game_search(name):
    import requests
    base_url = 'https://api.rawg.io'
    game_url = f'/api/games?page_size=5&search={name}%20v'
    
    r = requests.get(base_url + game_url)
    results = r.json()

    first_result = results['results'][0]
    name = first_result['name']
    released = first_result['released']
    image = first_result['background_image']
    rating = first_result['rating']
    rating_top = first_result['rating_top']
    game_id = first_result['id']

      
    return {'name': name, 'released': released, 'img': image, 'rating': rating, 'id': game_id, 'rating_top': rating_top}

def game_recommender(name):
    import requests
    base_url = 'https://api.rawg.io'
    similar_url = f'/api/games/{name}/suggested?page_size=5'

    recomander_r = requests.get(base_url + similar_url)
    recomander_results = recomander_r.json()

    # first_result = recomander_results['results'][0]
    # name_1 = first_result['name']
    # image_1 = first_result['background_image']
    # rating_1 = first_result['rating']

    # second_result = recomander_results['results'][1]
    # name_2 = second_result['name']
    # image_2 = second_result['background_image']
    # rating_2 = second_result['rating']

    # thrid_result = recomander_results['results'][2]
    # name_3 = thrid_result['name']
    # image_3 = thrid_result['background_image']
    # rating_3 = thrid_result['rating']

    # return {'name_1': name_1, 'image_1' : image_1, 'rating_1': rating_1}
        # 'name_2': name_2, 'image_2' : image_2, 'rating_2': rating_2,
        # 'name_3': name_3, 'image_3' : image_3, 'rating_3': rating_3}
        
    if 'detail' in recomander_results.keys(): 
       return 'No recomandation for now.'
    else : 
       return recomander_results
     
    

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Home</h1>'



@app.route('/form', methods = ['POST', 'GET'])
def form_example():
    if request.method == 'POST':
        name = request.form.get('name')
        game = game_search(name = name)  
        recs = game_recommender(name = name)
        return render_template('submitted.html', name = game, recs = recs)
    return render_template('form.html')



if __name__ == '__main__':
    app.run(debug = True)