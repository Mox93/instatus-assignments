import { NextRequest, NextResponse } from "next/server";

import { EventLog } from "@/types";
import { toInt } from "@/utils";

const db: EventLog[] = [
  {
    id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Mohamed Ragaiy",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "mox@instatus.com",
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
    actor_name: "Saad Kamal",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "saad@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2023-10-08T12:45:13.607Z",
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
    actor_name: "Samy Ahmed",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "samy@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2023-08-18T09:22:13.607Z",
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
    occurred_at: "2021-01-05T14:31:13.607Z",
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
    actor_name: "Fathi Saleh",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "fathi@instatus.com",
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

export async function GET(request: NextRequest) {
  // [DONE] Pagination: ?pageSize=20&page=1
  // [DONE] Search: ?search=someNameOrEmailOrAction
  // Filter: ?actor_id=user_3VG74289PUA2&target_id=user_DOKVD1U3L030&action_id=evt_action_PGTD81NCAOQ2&action_name=user.login_succeeded

  const params = request.nextUrl.searchParams;

  const page = toInt(params.get("page"), 1);
  const pageSize = toInt(params.get("pageSize"), 15);

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  const search = params.get("search");

  let result = db;

  if (search) {
    const _search = search.toLowerCase();
    result = result.filter(
      ({
        actor_name,
        actor_email,
        target_name,
        object,
        action: { name: action_name, object: action_object },
      }) =>
        [
          actor_name,
          target_name,
          object,
          action_name,
          action_object,
          ...(actor_email ? [actor_email] : []),
        ].some((val) => val.toLowerCase().includes(_search))
    );
  }

  return NextResponse.json(result.slice(start, end));
}

export async function POST(request: NextRequest) {
  return NextResponse.json({
    hello: "World!",
  });
}
