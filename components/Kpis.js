import React from "react";
import Link from "next/link";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import IssueDate from "./IssueDate";

function Kpis() {
  return (
    <div>
      <Container className="  pb-2 bg-gradient-to-br from-green-50 to-gray-50 shadow-md ">
        <IssueDate date={"04/2022"} />

        <div className="flex items-center justify-center m-8 ">
          <span className=" h-8 w-8 rounded-full flex items-center justify-center
          bg-gradient-to-l from-green-500 to-orange-200
          p-12 shadow-md text-2xl animate-pulse text-center font-bold">95%</span>
        </div>

        <Row lg={4} md={2} sm={1} className=" flex  flex-row-reverse  ">
          <Link href="#">
            <Card className=" p-2  text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../kpis.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">
                  عرض النتائج
                </Card.Title>
                <Card.Text>
                  إجمالى الانتاج الشهرى للمحزر والمصنعات - بيان الاصابات والحوادث  - حالات عدم المطابقة ..
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../concern.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">
                  التقييم النهائى الشهرى
                </Card.Title>
                <Card.Text>
                  تقييم الحافز الشهرى طبقا للدرجات الوظيفية داخل كل ادارة
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../kpis.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">تراكمى النتائج</Card.Title>
                <Card.Text>
                    متابعة النتائج شهريا                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../kpis2.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">
                  سياسة احتساب الحافز الشهرى
                </Card.Title>
                <Card.Text>
                  بنود تقييم الحافز الشهرى وطريقة الحساب
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Row>

        <div className=" mt-3 mb-3 flex justify-center   ">
          <Link href="#">
            <a
              className="no-underline font-semibold  
                text-lg font-serif hover:bg-gray-200 hover:scale-105 pt-2 pb-2 pr-6 pl-6 rounded-lg shadow-md"
            >
              عرض النتائج كاملة
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Kpis;
