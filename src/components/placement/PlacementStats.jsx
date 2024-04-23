import React from 'react';
import { ImOffice } from "react-icons/im";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { ReactTyped } from 'react-typed';
function PlacementStats() {
    return (
        <div className="p-5 text-center bg-body-tertiary">
            <h1 className="text-body-emphasis mb-3">2023-24 Placement Highlights</h1>
            <div className="container py-5">
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column mb-3">
                                <div className="fs-1"><ImOffice /></div>
                                <div className="p-2 fs-3">156+</div>
                                <div className="p-2">Companies</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column mb-3">
                                <div className="fs-1"><FaMoneyCheckAlt /></div>
                                <div className="p-2 fs-3">1245+</div>
                                <div className="p-2">Placement Offers</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column mb-3">
                                <div className="fs-1"><MdAttachMoney /></div>
                                <div className="p-2 fs-3">1.3Cr</div>
                                <div className="p-2">Highest Package</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column mb-3">
                                <div className="fs-1"><GoGoal /></div>
                                <div className="p-2 fs-3">97%</div>
                                <div className="p-2">Placements</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlacementStats;
