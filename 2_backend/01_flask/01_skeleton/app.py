from flask import Flask
# wsgi
app = Flask(__name__)  #flask app object

#decorator which helps you to understand how many urls are there
@app.route('/')
def welcome():
    return "welcome"


@app.route('/members')
def members():
    return "hi members"


if __name__=='__main__':
    app.run(debug=True) #directly updates the webpage
