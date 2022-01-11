### Building Url Dynamically 
####Variable Rules And URL Building


from flask import Flask, redirect, url_for #importing flask class, redirect and url for
app = Flask(__name__)


@app.route('/')
def welcome():
    return "welcome"


@app.route('/success/<int:score>')
def success(score):
    return "the person has passed and the score is: " + str(score)
# output
# http://127.0.0.1:5000/success/45
# the person has passed and the score is: 45


@app.route('/fail/<int:score>')
def fail(score):
    return "the person has failed and the score is: " + str(score)
# output
# http://127.0.0.1:5000/fail/10
# the person has passed and the score is: 10


@app.route('/results/<int:marks>')
def results(marks):
    result = ""
    if marks>60:
         result ='success'
    else:
         result = 'fail'
    #return results #when we execute this we see that it does not work so instead we must redirect
    return redirect(url_for(result,score=marks)) #has 2 parametres first is the result page akadanundi marks page

if __name__ == '__main__':
    app.run(debug=True)
