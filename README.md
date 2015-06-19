postal.queue
================
Adding queues to postal.js

API
=====
Create a new queue:
```
postal.createQueue(options);
```

Options available:
* topic: the name of the queue

Subscribe to a queue:
```
postal.subscribe({topic: "queueTopic"});
```

Publish to a queue:
```
postal.publish({topic: "queueTopic", data: "data"});
```

TODO
==========
1. Add tests
2. Store the messages when there is no subscriber
3. Implement ack/reject
4. Implement TTL
5. Implement some kind of flooding control (max num of pending elements)
6. Create some store system for the queues (redis, mongo, localStorage, cookies...)
7. Enable for monitoring metrics
