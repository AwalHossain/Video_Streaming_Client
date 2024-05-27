# 🎥 MERN Video Streaming Platform 🎥 (ONGOING)


This project is a full-stack video streaming service built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript. It allows users to upload videos, which are then processed and converted into multiple bitrates for adaptive streaming. The application follows a microservices architecture and uses various technologies like RabbitMQ (message broker), Socket.IO (real-time communication), FFmpeg (video processing), and BullMQ (job queues).


![Project Diagram](https://i.ibb.co/qDT7gDh/diagram-export-5-27-2024-2-41-36-PM.png)



## 🌐 Overview 

The video streaming service aims to provide a smooth experience for users to upload, process, and stream videos with adaptive bitrate streaming. It tackles challenges like video processing, concurrency issues, and microservices integration by using modern technologies and architectural patterns.




## 🌟 Features

- **Adaptive Bitrate Streaming**: Videos are converted into multiple bitrates, allowing users to stream at the highest quality based on their network conditions.
- **Real-time Video Processing**: Uploaded videos are processed in real-time, converting them to MP4 format and generating multiple HLS bitrate streams using FFmpeg.
- **Microservices Architecture**: The application is built with a decoupled microservices architecture for scalability, maintainability, and fault tolerance.
- **Message Queue Integration**: RabbitMQ is used as a message broker to enable communication between microservices, facilitating asynchronous processing and real-time progress tracking.
- **Real-time Progress Tracking**: Users receive real-time notifications and progress updates throughout the video processing workflow by RabbitMQ then pass the progress and notification to the Client side using Socket.IO.
- **Cloud Storage Integration**: Processed video files are stored in Azure Blob Storage for efficient serving and scalability.


## 🏗️ Architecture

![Project Diagram](https://i.ibb.co/YQtr0yh/Untitled-2024-05-10-2008.png)


The microservices architecture consists of three main components:

### 🖥️ API Server

 Handles authentication, API requests, and manages video and user metadata in MongoDB.

### 🎞️ Video Processing Service

Processes videos in real-time, converts them to adaptive bitrates using FFmpeg, and stores processed files in Azure Blob Storage.

![Project Image](https://github.com/AwalHossain/video_streaming_service_server/assets/80216813/9e6b1889-c9d6-45d8-806e-27865f674912)

1. **Video Conversion:** Converts any format video into MP4 and applies a watermark if an image is provided.
2. **Adaptive Bitrate Processing:** Transforms the video into adaptive bitrate HLS format (480p & 1080p) for optimal streaming quality.
3. **CDN Upload:** Upon successful conversion, the video is uploaded to a CDN bucket storage. This allows users to stream videos seamlessly from anywhere in the world.

BullMQ manages the job queue, passing one job to the next upon completion, with job data stored in Redis. Please note that this service is not exposed to any HTTP port, ensuring a secure video processing pipeline.

### 📡 Api-Gateway
Acts as a gateway between the frontend and backend services, routing requests and facilitating communication through RabbitMQ.

The microservices communicate with each other using RabbitMQ as an asynchronous message broker and, in some cases, HTTP requests. The API gateway communicates with the frontend using Socket.IO for real-time updates and progress tracking.

### Challenges and Solutions



1. **Message Queue Setup**: Setting up the internal message queue (RabbitMQ) was challenging due to the multi-step nature of video conversion. BullMQ was implemented to facilitate communication between each step.

2. **Adaptive Bitrate Conversion**: Converting MP4 videos into multiple HLS bitrates using Node.js and FFmpeg required extensive testing and experimentation.

3. **Concurrency Issues**: Microservices setup and RabbitMQ integration presented concurrency problems, leading to video file mixing during simultaneous uploads. Asynchronous mutex was applied to resolve this issue.

4. **Microservices Integration**: Integrating the message broker with each server and ensuring proper communication posed additional complexities.

## Future Enhancements

- Implement advanced video analytics and recommendations.
- Enhance security features, such as video encryption and access control.
- Improve scalability by leveraging cloud-native technologies.
- Implement caching mechanisms for improved performance.
- Incorporate machine learning for intelligent video transcoding and bitrate optimization.


## Additional Resources

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [Socket.IO Documentation](https://socket.io/docs/v4/)
- [BullMQ Documentation](https://docs.bullmq.io/)







## 🚀 Getting Started

### Prerequisites

To get started with MERN Video Streaming, you will need to have the following
software installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 🛠️ Built with Open-Source Technologies

MERN Video Streaming has been built with the following open-source technologies:

- [MongoDB](https://www.mongodb.com/) - A document-based database used to store
  user and video data
- [Express](https://expressjs.com/) - A Node.js web application framework used
  for the server-side of the application
- [React](https://reactjs.org/) - A JavaScript library for building user
  interfaces used for the client-side of the application
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment used to
  run the server-side code

## 💻 Installation

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/AwalHossain/Video_Streaming_With_MERN.git
```

### 2. Install dependencies using npm

#### 2.1 Server dependencies

```bash
npm install
```

### 3. Start the database and Redis using docker-compose

```bash
docker-compose up -d
```

### 4. Start the application

This will start all the three backend services.

```bash
npm run dev
```

### 5. Usage

You can now access the application at http://localhost:5000.

## 🤝 Contributing to MERN Video Streaming

MERN Video Streaming is an open-source project and we welcome contributions from
the community. If you would like to contribute to the project, please refer to
the `CONTRIBUTING.md` file for guidelines.

## 📜 License

MERN Video Streaming is licensed under the MIT License. Please see the `LICENSE`
file for more information.

## 📝 Note

This project is still under development. The README will be updated as the project progresses. Thank you for your interest and stay tuned for more updates!.

This readme file is not finished yet. I will update it as I go along with the
project. Thanks.
