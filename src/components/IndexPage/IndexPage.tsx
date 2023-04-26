import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Carousel, Card, Row, Col, message } from "antd";
import getHeadlines from "@/service/homepage/homepage.service";
import { error } from "console";
import Navbar from "../navbar/Navbar";

const IndexPage = (props: { topic?: string; selectKey?: number }) => {
  const [dataHeadLines, setDataHeadLines] = useState<any[]>();

  const fetchDataHeadLine = async () => {
    try {
      const data = await getHeadlines({
        q: props.topic ? props.topic : "thai",
        form: new Date().toISOString().substring(0, 10),
        sortBy: "publishedAt",
      });
      if (data instanceof Error) throw data.message;
      setDataHeadLines(data.data?.articles);
      console.log(dataHeadLines);
    } catch (error: any) {
      message.error(error);
    }
  };

  useEffect(() => {
    fetchDataHeadLine();
  }, []);
  return (
    <>
      <Navbar selectkey={props.selectKey} />
      <Carousel autoplay style={{ display: "flex", justifyContent: "center" }}>
        {/* {dataHeadLines?.map((articles,index) => {
          return (
            <div key={index}>
              <img src={articles?.urlToImage} alt="carousel1" />
            </div>
          );
        })} */}
        {/* {dataHeadLines?.[0]?.urlToImage ? (
          <div>
            <Image
              src={dataHeadLines?.[0]?.urlToImage}
              alt="News Image"
              width={260}
              height={146.25}
            />
          </div>
        ) : (
          <></>
        )}
        {dataHeadLines?.[1]?.urlToImage ? (
          <div>
            <Image
              src={dataHeadLines?.[1]?.urlToImage}
              alt="News Image"
              width={260}
              height={146.25}
            />
          </div>
        ) : (
          <></>
        )}
        {dataHeadLines?.[2]?.urlToImage ? (
          <div>
            <Image
              src={dataHeadLines?.[2]?.urlToImage}
              alt="News Image"
              width={260}
              height={146.25}
            />
          </div>
        ) : (
          <></>
        )} */}
      </Carousel>
      <Row gutter={[24, 24]} style={{ margin: "24px auto" }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card
            hoverable
            cover={
              <img
                src={dataHeadLines?.[0]?.urlToImage}
                alt="news1"
                style={{ height: "300px", objectFit: "cover" }}
              />
            }
          >
            <Card.Meta
              title={dataHeadLines?.[0]?.title}
              description={dataHeadLines?.[0]?.description}
              style={{ height: "150px", overflow: "hidden" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card
            hoverable
            cover={
              <img
                src={dataHeadLines?.[1]?.urlToImage}
                alt="news2"
                style={{ height: "300px", objectFit: "cover" }}
              />
            }
          >
            <Card.Meta
              title={dataHeadLines?.[1]?.title}
              description={dataHeadLines?.[1]?.description}
              style={{ height: "150px", overflow: "hidden" }}
            />
          </Card>
        </Col>
      </Row>
      <Carousel autoplay style={{ marginTop: "24px" }}>
        <Card
          hoverable
          cover={
            <img
              src={dataHeadLines?.[2]?.urlToImage}
              alt="news3"
              style={{ height: "300px", objectFit: "cover" }}
            />
          }
        >
          <Card.Meta
            title={dataHeadLines?.[2]?.title}
            description={dataHeadLines?.[2]?.description}
            style={{ height: "150px", overflow: "hidden" }}
          />
        </Card>
        <Card
          hoverable
          cover={
            <img
              src={dataHeadLines?.[3]?.urlToImage}
              alt="news4"
              style={{ height: "300px", objectFit: "cover" }}
            />
          }
        >
          <Card.Meta
            title={dataHeadLines?.[3]?.title}
            description={dataHeadLines?.[3]?.description}
            style={{ height: "150px", overflow: "hidden" }}
          />
        </Card>
        <Card
          hoverable
          cover={
            <img
              src={dataHeadLines?.[4]?.urlToImage}
              alt="news5"
              style={{ height: "300px", objectFit: "cover" }}
            />
          }
        >
          <Card.Meta
            title={dataHeadLines?.[4]?.title}
            description={dataHeadLines?.[4]?.description}
            style={{ height: "150px", overflow: "hidden" }}
          />
        </Card>
      </Carousel>
    </>
  );
};

export default IndexPage;
