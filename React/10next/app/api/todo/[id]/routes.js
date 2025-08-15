import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Todo from '@/models/Todo';

// GET /api/todos/[id] - Get a single todo
export async function GET(request, context) {
  try {
    const { id } = await context.params;
    await connectToDatabase();
    
    const todo = await Todo.findById(id);
    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch todo' },
      { status: 500 }
    );
  }
}

// PUT /api/todos/[id] - Update a todo
export async function PUT(request, context) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { title, isRecorded } = body;

    await connectToDatabase();
    
    const todo = await Todo.findById(id);
    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      );
    }

    // Update only the fields that are provided
    if (title !== undefined) todo.title = title;
    if (isRecorded !== undefined) todo.isRecorded = isRecorded;

    await todo.save();
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    );
  }
}

// DELETE /api/todos/[id] - Delete a todo
export async function DELETE(request, context) {
  try {
    const { id } = await context.params;
    await connectToDatabase();
    
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
} 