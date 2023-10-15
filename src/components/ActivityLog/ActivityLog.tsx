"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import Item from "@/components/Item";
import { EventLog } from "@/types";

const events: EventLog[] = [
  {
    id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2023-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_25B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2023-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_35B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_45B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_55B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_65B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_75B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_85B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_95B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
];

export default function ActivityLog() {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="ActivityLog">
      <div className="header">
        <SearchBar />
        <div className="labels">
          <h3>ACTOR</h3>
          <h3>ACTION</h3>
          <h3>DATE</h3>
        </div>
      </div>
      <div className="body">
        {events.map((data) => (
          <Item
            key={data.id}
            data={data}
            expanded={selected === data.id}
            select={() => setSelected(data.id)}
            unselect={() => setSelected(undefined)}
          />
        ))}
      </div>
      <div className="footer">
        <button className="load">LOAD MORE</button>
      </div>
    </div>
  );
}
