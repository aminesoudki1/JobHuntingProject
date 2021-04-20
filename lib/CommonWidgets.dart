import 'package:flutter/material.dart';

Widget textForm(String label, TextEditingController textController, bool isPassword) {
  return TextFormField(
    decoration: InputDecoration(
      border: OutlineInputBorder(
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      labelText: label,
    ),
    controller: textController,
    obscureText: isPassword,
  );
}