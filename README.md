postal.queue
================
Adding queues to postal.js

API
=====
Create a new queue:
    postal.createQueue(options);

Options available:
   topic: the name of the queue

Subscribe to a queue:
    postal.subscribe({topic: "queueTopic"});

Publish to a queue:
    postal.publish({topic: "queueTopic", data: "data"});

