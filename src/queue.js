(function (postal) {
	var originalSubscribe = postal.subscribe;
	var queues = {};

	function isQueue (options) {
		return !!queues[options.topic];
	}

	postal.createQueue = function (options) {
		var queueOptions = {
			subscribers: []
		};
		queues[options.topic] = queueOptions;
		subscribeTopic({
			topic: options.topic,
			callback: function (data) {
				debugger;
				var target = queueOptions.subscribers.shift();
				queueOptions.subscribers.push(target);
				postal.publish({
					topic: target,
					data: data
				});
			}
		});

	};

	function subscribeTopic (options) {
		return originalSubscribe.call(postal, options);
	}

	function subscribeQueue (options) {
		var queueOptions = queues[options.topic];
		var subTopic = options.topic + "." + (queueOptions.subscribers.length + 1);
		queueOptions.subscribers.push(subTopic);
		options.topic = subTopic;
		subscribeTopic(options);
	}

	postal.subscribe = function (options) {
		if (isQueue(options)) {
			return subscribeQueue(options);
		} else {
			return subscribeTopic(options);
		}
	};

}(postal));
