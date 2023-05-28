import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  // const response = NextResponse.next();
  const response = NextResponse.next({ // headers, request, status, statusText
    request: {
      headers: req.headers // or new Headers(req.headers)
    }
  });

  response.headers.set('x-custom-auth-header', 'isAuthed')

  const cookie = req.cookies.get('auth')?.value
  const allCookies = req.cookies
  console.log(' - - - ');
  console.log('cookie: ', cookie);
  console.log('allCookies: ', allCookies);

  // if (req.nextUrl.pathname.startsWith('/')) {
  //   console.log('mw ran');
  //   console.log(req.nextUrl.pathname);
  // }

  // console.log(response.headers);

  response.headers.forEach(header => {
    console.log('header:', header);
  });

  response.cookies.set('isAuthed2', 'gg')
  console.log(response.cookies);
  return response
}

export const config = {
  matcher: '/'
}