import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_svg/svg.dart';
import 'Constants/StringConstants.dart' as Strings;
import 'dart:html' as html;

class Results extends StatelessWidget {
  String search;
  Results(this.search);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(Strings.appName),
          elevation: 10,
          centerTitle: true,
          titleSpacing: 5,
        ),
        body: Padding(
            child: getData(search),
        padding: EdgeInsets.all(10),),
      );
  }
}

launch(String url) {
  html.window.open(url, 'new tab');
}

Widget getData(String search) {
  print('searching for $search');
  return Builder(builder: (BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
      stream: FirebaseFirestore.instance.collection("JobPosting").snapshots(),
      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
        if (snapshot.hasError) return new Text('${snapshot.error}');
        switch (snapshot.connectionState) {
          case ConnectionState.waiting:
            return new Center(child: CircularProgressIndicator());
          default:
            return GridView.builder(
                gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                    maxCrossAxisExtent: 200,
                    childAspectRatio: 3 / 2,
                    crossAxisSpacing: 20,
                    mainAxisSpacing: 20),
                itemCount: snapshot.data.size,
                itemBuilder: (context, index) {
                  String title = "NoTitle";
                  String location = "NoCompany";
                  try {
                    title = snapshot.data.docs[index].get("jobTitle");
                  } catch (e) {

                  }
                  return renderSingleEntry(snapshot.data.docs[index]);
                });
        }
      },
    );
  });
}

Widget renderSingleEntry(QueryDocumentSnapshot doc) {
  String title = "NoTitle";
  String location = "NoCompany";
  String webpage = doc.get("webpage");
  try {
    title = doc.get("jobTitle");
    location = doc.get("location");
  } catch (e) {
    return Container();
  }
  String renderer = "images/indeed.png";
  if (webpage.contains("indeed")) {
    renderer = 'images/indeed-logo.svg';
  } else if (webpage.contains("linkedin")) {
    renderer = "images/linkedin.svg";
  }
  return  GestureDetector(
    onTap: () {launch(doc.get("webpage"));},
    child: Card(
      margin: EdgeInsets.fromLTRB(2,0,2,0),
      elevation: 30,
      shadowColor: Colors.black,
      child: Stack(
        alignment: Alignment.bottomRight,
        children: [
          SvgPicture.asset(renderer,height: 20, width: 20,),
          Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  title.trim(),
                  maxLines: 3,
                  textAlign: TextAlign.start,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              Text(
                location.trim(),
                textAlign: TextAlign.left,
                maxLines: 3,
                style: TextStyle(
                    fontSize: 12,
                  fontStyle: FontStyle.italic,
                ),
              )
            ],
          ),]
      ),
    ),
  );
}
