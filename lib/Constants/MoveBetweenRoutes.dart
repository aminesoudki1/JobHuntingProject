

import 'package:flutter/material.dart';
import 'package:jobsWebsite/SignUpPage.dart';
import 'package:jobsWebsite/main.dart';
import 'package:jobsWebsite/Results.dart';

class Router {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    print(settings.name);
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => HomePage());
      case '/search':
        String args = settings.arguments as String;
        return MaterialPageRoute(builder: (_) => Results(args));
      case '/authenticate':
        bool args = settings.arguments as bool;
        return MaterialPageRoute(builder: (_) => SignUpPage(args));
      default:
        return MaterialPageRoute(
            builder: (_) => Scaffold(
              body: Center(
                  child: Text('No route defined for ${settings.name}')),
            ));
    }
  }
}
void toHomePage(BuildContext context) {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => HomePage()),
  );
}

void toHomePageNoReplacement(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => HomePage()),
  );
}

void toSignUpPage(BuildContext context, bool signUp) {
  Navigator.pushNamed(context, "/authenticate", arguments: signUp);

}

void toResults(BuildContext context, String search) {
  Navigator.pushNamed(context, "/search", arguments: search);
}