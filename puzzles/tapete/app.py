from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check', methods=['POST'])
def check():
    data = request.json
    correct_configuration = {
        'pedestal1': 'Objeto 3',
        'pedestal2': 'Objeto 1',
        'pedestal3': 'Objeto 2',
        'pedestal4': 'Objeto 4'  # Ajuste conforme necessário
    }
    if data == correct_configuration:
        return jsonify({'result': 'correct'})
    else:
        return jsonify({'result': 'incorrect'})

if __name__ == '__main__':
    app.run(debug=True)
