
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:jobsWebsite/CommonWidgets.dart';
import 'Constants/StringConstants.dart' as Strings;
import 'Constants/MoveBetweenRoutes.dart' as routes;

class HomePageBody extends StatelessWidget {
  TextEditingController text = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.fromLTRB(0, MediaQuery.of(context).size.height/4, 0, 0),
          child: Container(
            padding: EdgeInsets.fromLTRB(200, 0, 200, 0),
            child: textForm(Strings.search,text , false),
          ),
        ),
        Padding(padding: EdgeInsets.fromLTRB(0, 10, 0, 0)),
        Container(
          child: IconButton(
            onPressed: () {
              routes.toResults(context, text.text.toString());
            },
            iconSize: 40,
            icon: Icon(Icons.search),
          ),
        ),
      ],
    );
  }
}