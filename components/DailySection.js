import Link from "next/link";
import React from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import IssueDate from "./IssueDate";
import Tooltip from "../components/Tooltip";

function DailySection() {
  const tip = `<h1>my tool tip</h1>`
  
  return (
    <div className="">
      <Container className=" pb-2 bg-gray-100 shadow-md">

        <IssueDate date={"10/05/2022"}/>
        <Row lg={4} md={2} sm={1}>
          <Link href="/dailyreport">
            <Card 
              className=" relative p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700"
              data-toggle="tooltip" data-placement="top" data-html="true" title={"عدد الغياب : 18 فرد"}
                >
                <Card.Img variant="top" src="../employee.jpg"  className=" h-60 "/>
                <Card.Body>
                  <Card.Title className=" text-gray-600">دوام العاملين</Card.Title>
                  <Card.Text>
                    بيانات  الدجاج الوارد - نافق الوصول - الدجاج تحت الوزن - الدجاج المقبول
                  </Card.Text>
                </Card.Body>
                {/* <Tooltip /> */}
            </Card>
          </Link>          
          
          <Link href="/dailyreport">
            <Card 
              className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat"
              data-toggle="tooltip" data-placement="top" data-html="true" title={"إجمالى الانتاج 10,320 طن"}
              >
                <Card.Img variant="top" src="../fpp.jpg"  className=" h-60 "/>
                <Card.Body>
                  <Card.Title className=" text-gray-600">إنتاج المصنعات</Card.Title>
                  <Card.Text>
                    الانتاج اليومى للمصنعات - تحقيق خطة المبيعات
                  </Card.Text>
                </Card.Body>
            </Card>
          </Link>

          <Link href="/dailyreport">
            <Card 
            className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat"
            data-toggle="tooltip" data-placement="top" data-html="true" title={"إجمالى الانتاج 25,000 طن"}
            >
                <Card.Img variant="top" src="../fresh.jpg"  className=" h-60 "/>
                <Card.Body>
                  <Card.Title className=" text-gray-600">إنتاج المجزر</Card.Title>
                  <Card.Text>
                    بيان انتاج الفريش - انتاج المدرجات - انتاج المجزءات - دجاج اشهى
                  </Card.Text>
                </Card.Body>
            </Card>
          </Link>

          <Link href="/dailyreport">
            <Card 
            className=" p-2 text-right cursor-pointer hover:scale-105 hover:text-green-700 animat"
            data-toggle="tooltip" data-placement="top" data-html="true" title={"إجمالى الوارد 30,000 دجاجة"}
            >
                <Card.Img variant="top" src="../A.jpg"  className=" h-60 "/>
                <Card.Body>
                  <Card.Title className=" text-gray-600">الدجاج الوارد</Card.Title>
                  <Card.Text>
                    بيانات  الدجاج الوارد - نافق الوصول - الدجاج تحت الوزن - الدجاج المقبول
                  </Card.Text>
                </Card.Body>
            </Card>
          </Link>

        </Row>

        <div className=" mt-3 mb-3 flex justify-center   ">
          <Link href="/dailyreport">
            <a className="no-underline font-semibold  
             text-lg font-serif hover:bg-gray-200 hover:scale-105 pt-2 pb-2 pr-6 pl-6 rounded-lg shadow-md
            ">عرض التقرير كامل</a>
          </Link>
        </div>

      </Container>
    </div>
  )
}

export default DailySection;
