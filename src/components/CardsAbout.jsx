"use client";
import { cardsList } from "@/utils/data";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CardsAbout = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsList);
  }, []);
  return (
    <>
      <section className="h-[65vh] py-20">
        <div className="container">
          <div className="cards flex gap-5">
            {cards.map((card) => (
              <div
                className="card shadow-lg rounded w-[33%] p-6 flex flex-col justify-center items-center gap-4 hover:translate-y-[-10px] transition ease duration-300"
                key={card.id}
              >
                <div dangerouslySetInnerHTML={{ __html: card.img }} />
                <h2 className="text-sm font-bold">{card.title}</h2>
                <p className=" text-center text-xs leading-6">{card.desc}</p>
                <Link
                  href=""
                  className="flex items-center text-xs text-indigo-500 font-semibold gap-2"
                >
                  <FontAwesomeIcon icon={faArrowRightLong} className="w-3" />
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsAbout;
