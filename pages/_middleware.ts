import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlists", "/library"];

export default function middleware(request) {
  if (signedInPages.find((page) => page === request.nextUrl.pathname)) {
    const token = request.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect("signin");
    }
  }
}
