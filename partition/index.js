
const { Kafka } = require("kafkajs");

// λ npm run start:partition

async function createPartition() {
    const kafka = new Kafka({
        clientId: "aslan-id",
        brokers: ["127.0.0.1:9092"]
    });

    const admin = kafka.admin();
    await admin.connect();


    var partitions = 10;
    var result = await admin.createTopics({
      topics: [
        {
          topic: "customer-topic-2",
          numPartitions: partitions,
        },
      ],
    });

    console.log(partitions + " partitons created: ", result);

}; 


createPartition();

console.log("partition...");
