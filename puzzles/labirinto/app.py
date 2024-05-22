from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

correct_paths = {
    "secao1": "secao2",
    "secao2": "secao3",
    "secao3": "secao4",
    "secao4": "secao5",
    "secao5": "secao6",
    "secao6": "secao7",
    "secao7": "secao8",
    "secao8": "secao9",
    "secao9": "secao10",
    "secao10": "secao11",
    "secao11": "secao12",
    "secao12": "secao13",
    "secao13": "secao14",
    "secao14": "secao15",
    "secao15": "secao16",
    "secao16": "secao17",
    "secao17": "secao18",
    "secao18": "saida"
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    data = request.json
    current_section = data.get('current_section')
    chosen_path = data.get('chosen_path')

    if correct_paths.get(current_section) == chosen_path:
        return jsonify({"status": "correct"})
    else:
        return jsonify({"status": "incorrect"})

if __name__ == '__main__':
    app.run(debug=True)
