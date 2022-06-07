import React from "react";
import Link from "next/link";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import IssueDate from "./IssueDate";

function MonthlySection() {
  return (
    <div className="">
      <Container className="  pb-2 bg-gradient-to-br from-green-50 to-gray-50 shadow-md">
        <IssueDate date={"04/2022"} />

        <Row lg={4} md={2} sm={1} className=" flex  flex-row-reverse  ">
          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../eff.jpg" className=" h-60 "/>
              <Card.Body>
                <Card.Title className=" text-gray-600">الكفاءة الانتاجية</Card.Title>
                <Card.Text>
                  كفاءة انتاج المجزر - كفاءة انتاج المصنعات - التوقفات الغير مخططة
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../achiv.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">تحقيق خطة الانتاج</Card.Title>
                <Card.Text>نسبة الالتزام بتحقيق المخطط من المنتجات المبردة والمجمدة والمصنعات </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../profit.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">الجــــودة</Card.Title>
                <Card.Text>
                  جودة العمليات الانتاجية - جودة المنتجات النهائية - النتائج المعملية
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link href="#">
            <Card className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat">
              <Card.Img variant="top" src="../donext.jpg" className=" h-60 " />
              <Card.Body>
                <Card.Title className=" text-gray-600">تقرير الموارد البشرية</Card.Title>
                <Card.Text>
                  نسبة الغياب والحضور والايام المفقودة - التعيينات والاستقالات
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Row>

        <div className=" mt-3 mb-3 flex justify-center   ">
          <Link href="">
            <a
              className="no-underline font-semibold  
     text-lg font-serif hover:bg-gray-200 hover:scale-105 pt-2 pb-2 pr-6 pl-6 rounded-lg shadow-md
    "
            >
              عرض التقرير كامل
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default MonthlySection;
