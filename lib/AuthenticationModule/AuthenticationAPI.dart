import 'package:firebase_auth/firebase_auth.dart';

FirebaseAuth auth = FirebaseAuth.instance;

User authenticateAnonymous() {
  User user;
  auth.signInAnonymously().then((value) => user = value.user).onError((error, stackTrace) => errorFunc(error, stackTrace));
  return user;
}

Future<User> authenticateViaEmail(String email, String password) async {
  User user;
  await auth.signInWithEmailAndPassword(email: email, password: password).then((value) => user = value.user)
      .onError((error, stackTrace) => errorFunc(error, stackTrace));
  return user;

}

Future<User> createUserWithEmailnPass(String email, String password) async {
  User user;
  await auth.createUserWithEmailAndPassword(email: email, password: password).then((value) => user = value.user)
      .onError((error, stackTrace) => errorFunc(error, stackTrace));
  return user;
}

Future<void> verifyEmail(User user) async {
  if (!user.emailVerified) {
    await user.sendEmailVerification();
  }
}

errorFunc(error, StackTrace stackTrace) {
  print(error);
  throw error;
  //log stack trace
}

