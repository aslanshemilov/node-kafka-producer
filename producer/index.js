
const { Kafka, logLevel } = require("kafkajs");

// λ npm run start:producer

async function produce() {
  // 1.Instantiating kafka
  const kafka = new Kafka({
    clientId: "aslan-id",
    brokers: ["127.0.0.1:9092"],
    logLevel: logLevel.DEBUG,
  });

  const randomNum = 6; //process.argv[2];

  // 2.Creating Kafka Producer
  const producer = kafka.producer();

  try {
    // 3.Connecting producer to kafka broker.
    await producer.connect();
    console.log("Kafka producer connected...");
  } catch (error) {
    throw new Error(`Couldn't connect producer.`);
  }

  var data = {
    0: "John",
    1: "james",
    2: "Johny",
    3: "Jack",
    4: "Tom",
    5: "Otto",
    6: "Bruce",
    7: "Russel",
    8: "David",
    9: "William",
  };

  //https://www.npmjs.com/package/kafkajs
  //https://kafka.js.org/docs/introduction
  //https://kafka.js.org/docs/producing
  //https://kafka.js.org/docs/producer-example
  //kafka.js.org/docs/running-kafka-in-development
  //https://www.sohamkamani.com/nodejs/working-with-kafka/ //good one
  //https://www.confluent.io/blog/getting-started-with-kafkajs/ sasl
  //https://npm.io/package/kafkajs sasl
  //https://openbase.com/js/kafkajs
  //https://www.tabnine.com/code/javascript/functions/kafkajs/Kafka/producer
  //https://www.tabnine.com/code/javascript/modules/kafkajs
  //https://kafkajs.github.io/confluent-schema-registry/docs/usage-with-kafkajs //avro schema
  //https://morioh.com/p/563003f857b4
  //https://medium.com/@jonathanferreira23/how-to-implement-a-bulletproof-kafka-producer-consumer-cycle-with-nodejs-81c58dd79dd3
  //https://cnpmjs.org/package/kafkajs
  //https://vectorized.io/docs/guide-nodejs/
  //https://thecodebarbarian.com/getting-started-with-apache-kafka-in-node-js.html
  https: var result = await producer.send({
    topic: "customer-topic-1",
    messages: [
      {
        value: data[randomNum],
        partitin: randomNum <= 5 ? 0 : 1, //must be more than 1 partition to apply this logic
      },
    ],
  });

  console.log("Produced data:", JSON.stringify(result));
  await producer.disconnect();
}; 


produce();

console.log("producer...");
