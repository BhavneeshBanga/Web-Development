export async function POST(request) {

  const body = await request.json();

  console.log("Data received from frontend:");
  console.log(body);

  return Response.json({
    success: true,
    message: "Data received successfully",
    receivedData: body,
  });
}