package com.cwwf;

import com.google.firebase.messaging.FirebaseMessagingService;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String TAG = "MyFirebaseMsgService";

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);

        sendRegistrationToServer(token);
    }

    private void sendRegistrationToServer(String token) {

    }
}
