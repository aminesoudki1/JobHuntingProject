import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:jobsWebsite/HomePageBody.dart';
import 'package:jobsWebsite/SignUpPage.dart';
import 'AuthenticationModule/AuthenticationAPI.dart';
import 'Constants/StringConstants.dart' as Strings;
import 'Constants/MoveBetweenRoutes.dart' as routes;

void main() async {
  runApp(HomePage());
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      onGenerateRoute: routes.Router.generateRoute,
      initialRoute: "/",
      title: "homepage",
      theme: ThemeData(

      ),
      home: Builder(builder: (BuildContext context2) {
        return Scaffold(
          appBar: AppBar(
            title: Text(Strings.appName),
            elevation: 10,
            centerTitle: true,
            titleSpacing: 5,
            actions: setofActionsBasedonUser(context2),
          ),
          body: HomePageBody(),
        );
      }),
    );
  }

  signup(BuildContext context) {
    routes.toSignUpPage(context, true);
  }

  login(BuildContext context) {
    routes.toSignUpPage(context, false);
  }

  List<Widget> setofActionsBasedonUser(BuildContext context) {

    User user = auth.currentUser;
    if (user == null) {
      return [OutlineButton(
          child: Center(
            child: Text(Strings.signup),
            widthFactor: 2,
          ),
          onPressed: () => signup(context)
      ),
        Padding(padding: EdgeInsets.all(3)),
        OutlineButton(
            child: Center(
              child: Text(Strings.login),
              widthFactor: 2,
            ),
            onPressed: () => login(context)
        ),];
    }
    //sign in with email
    if (!auth.currentUser.isAnonymous) {
      return [
        Container(child:Text("current User: " + user.email),
        height: 100,width: 150,),
        Center(child: getMenuForLoggedInUser(context)),
      ];
    } else {

    }
  }

  ThemeData appTheme() {
    return ThemeData(
      accentColor: Colors.amber,
      backgroundColor: Colors.deepPurple,
      appBarTheme: AppBarTheme(
        color: Colors.amber,
      ),
    );
  }

  Widget getMenuForLoggedInUser(BuildContext context) {
    return DropdownButton<String>(
      hint: Text("My Account"),
      icon: Icon(Icons.arrow_drop_down),
      iconSize: 24,
      elevation: 16,
      style: TextStyle(color: Colors.deepPurple),
      underline: Container(
        height: 0,
      ),
      onChanged: (String newValue) {
        menuItemActions(newValue);
        routes.toHomePageNoReplacement(context);
      },
      items: <String>['SignOut']
          .map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }

  bool menuItemActions(String value) {
    if (auth.currentUser != null) {
      if (value == 'SignOut') {
        auth.signOut().then((value) {return true;}).onError((error, stackTrace) {return false;});
      }
    }
  }
}

