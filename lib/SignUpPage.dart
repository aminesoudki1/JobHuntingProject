import 'package:flutter/material.dart';
import 'package:jobsWebsite/CommonWidgets.dart';
import 'AuthenticationModule/AuthenticationAPI.dart';
import 'Constants/StringConstants.dart' as Strings;
import 'Constants/MoveBetweenRoutes.dart' as routes;

class SignUpPage extends StatelessWidget {
  bool signUp;
  SignUpPage(this.signUp);
  @override
  Widget build(BuildContext context) {
    print(signUp);
    return Scaffold(
      appBar: AppBar(
        title: Text("JobHuntingWebsite"),
        elevation: 10,
        centerTitle: true,
        titleSpacing: 5,
        actions: [],
      ),
      body: SignUp(signUp),
    );
  }
}

class SignUp extends StatefulWidget {
  bool signUp;
  SignUp(this.signUp);

  @override
  State<StatefulWidget> createState() {
    return SignUpBody();
  }
}

class SignUpBody extends State<SignUp> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  bool onError = false;
  String errorMSG = "";
  bool progressIndicator = false;
  @override
  Widget build(BuildContext context) {
    return Card(

      shadowColor: Colors.black,
      child: Padding(
        padding: EdgeInsets.fromLTRB(10,20,10,10),
        child: Column(
          children: [
            textForm("email", email, false),
            Visibility(
              child: Text(
                errorMSG,
                style: TextStyle(color: Colors.redAccent),
              ),
              visible: onError,
              maintainState: false,
            ),
            Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 25)),
            textForm("password", password, true),
            Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 25)),
            IconButton(
                icon: Icon(Icons.login_sharp),
                onPressed: () => goto(this.widget.signUp)),
            Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 25)),
            Visibility(
              child: CircularProgressIndicator(
                strokeWidth: 10,
              ),
              visible: progressIndicator,
            ),
            Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 25)),
            Text("Already a hunter? Sign in here"),
          ],
        ),
      ),
      margin: EdgeInsets.all(200),
      elevation: 50,
    );
  }

  signUp(String email, String password) {
    showProgress(true);
    createUserWithEmailnPass(email, password)
        .then((value) => verifyEmail(value))
        .then((value) => routes.toHomePageNoReplacement(context))
        .onError((error, stackTrace) => signUpErrors(error));
  }

  login(String email, String password) {
    showProgress(true);
    authenticateViaEmail(email, password)
        .then((value) => showProgress(false))
        .then((value) => routes.toHomePageNoReplacement(context))
        .onError((error, stackTrace) => signUpErrors(error));
  }

  signUpErrors(error) {
    switch (error.hashCode) {
      //[firebase_auth/email-already-in-use] The email address is already in use by another account.
      case 506724287:
        {
          setState(() {
            onError = true;
            errorMSG = Strings.emailAlreadyInUse;
          });
        }
        break;
      //[firebase_auth/invalid-email] The email address is badly formatted.
      case 393119738:
        {
          setState(() {
            onError = true;
            errorMSG = Strings.emailBadlyFormatted;
          });
        }
        break;

      //[firebase_auth/weak-password] Password should be at least 6 characters
      case 33469711:
        {
          setState(() {
            onError = true;
            errorMSG = Strings.passwordMoreThan6;
          });
        }
        break;

      //[firebase_auth/wrong-password] The password is invalid or the user does not have a password.
      case 323483775:
        {
          setState(() {
            onError = true;
            errorMSG = Strings.invalidUserOrPass;
          });
        }
        break;
      default:
        {
          print(error.hashCode);
        }
        break;
    }
  }

  goto(bool isSignUp) {
    if (isSignUp) {
      signUp(email.text.toString(), password.text.toString());
    } else {
      login(email.text.toString(), password.text.toString());
    }
  }

  showProgress(bool value) {
    this.setState(() {
      progressIndicator = value;
    });
  }
}
