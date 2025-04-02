import { Container, Card, Row, Col } from "react-bootstrap";
import TopNav from "../components/TopNav";

function ProfessionalProjects() {
    return (
        <div>
            <TopNav />
            <Container className="professional-projects mt-4">
                <Row xs={1} className="g-4">
                    {/* Purchase Order Investigation Portal */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Purchase Order Investigation Portal</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    In a high-volume e-commerce fulfillment environment, third-party merchants submit purchase orders (POs) as commitments to send inventory to distribution centers. Discrepancies between expected and received inventory can arise, necessitating investigation and potential reimbursement.
                                </Card.Text>
                                <Card.Text>
                                    This tool provided investigators with a consolidated view of inventory movement data, streamlining decision-making for reimbursement cases. The project was developed within a tight three-month timeline, covering requirements gathering, design, MVP development, testing, and rollout.
                                </Card.Text>
                                <Card.Text>
                                    The new implementation introduced key automations, including inventory adjustment aggregation, invoice analysis, and shipment-level data visualization, improving efficiency and accuracy.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Front-End:</Card.Subtitle>
                                <ul>
                                    <li>Built with Node.js and TypeScript</li>
                                    <li>Customizable user preferences, including accessibility features (high contrast, color-blind mode)</li>
                                    <li>Dynamic filtering and sorting of POs by multiple criteria</li>
                                    <li>Export functionality for investigation data in CSV format</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Back-End:</Card.Subtitle>
                                <ul>
                                    <li>Developed in Java</li>
                                    <li>Aggregates data from multiple enterprise sources to provide a unified investigation view</li>
                                    <li>Deployed using cloud-based infrastructure with automated provisioning and API management</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Processed over 20 million unique page views over four years</li>
                                    <li>Served 1,200+ daily users globally</li>
                                    <li>Reduced manual processing time by over 50,000 hours in the first year, yielding significant cost savings</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Time Tracking Adjustment Platform */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Time Tracking Adjustment Platform</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    Aimed at improving workforce productivity tracking, this tool automated the process of adjusting and verifying productive vs. non-productive time for employees. Accurate tracking was critical to ensuring fair performance evaluations and operational efficiency.
                                </Card.Text>
                                <Card.Text>
                                    Investigators previously relied on a manual submission process, leading to errors and inefficiencies. The new platform enabled seamless time adjustment submissions, improved accuracy, and streamlined reporting.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Front-End:</Card.Subtitle>
                                <ul>
                                    <li>User-friendly interface for submitting, tracking, and approving adjustments</li>
                                    <li>Integrated validation checks to reduce manual errors</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Back-End:</Card.Subtitle>
                                <ul>
                                    <li>Cloud-based implementation for high availability and scalability</li>
                                    <li>Automated workflows for approval and reporting</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Improved accuracy in time tracking and performance evaluations</li>
                                    <li>Reduced administrative overhead for support staff</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Internal Career Development Platform */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Internal Career Development Platform</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    A career growth initiative designed to help employees transition into technical and leadership roles. The platform facilitated application submission, tracking, document management, and participant status monitoring.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Features:</Card.Subtitle>
                                <ul>
                                    <li>Centralized application tracking system</li>
                                    <li>Document upload and management functionality</li>
                                    <li>Real-time status updates for participants and administrators</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Supported career advancement for employees moving into technical and operational leadership roles</li>
                                    <li>Standardized and streamlined application processes across departments</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Automated Employee Promotion Announcement Tool */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Automated Employee Promotion Announcement Tool</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    A tool designed to automate the compilation and distribution of quarterly promotion announcements. Previously, executive assistants manually collected promotion details from managers, leading to inefficiencies.
                                </Card.Text>
                                <Card.Text>
                                    This solution automated email requests to managers for promotion details, streamlined approvals, and generated formatted announcements for easy distribution.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Features:</Card.Subtitle>
                                <ul>
                                    <li>Hierarchical org structure traversal to identify promoted employees</li>
                                    <li>Automated email requests and tracking for manager responses</li>
                                    <li>Approval workflow for finalizing and formatting announcements</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Reduced manual effort by 50+ hours per quarter per organization</li>
                                    <li>Standardized promotion announcements across multiple teams</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Guided Workflow for Inventory Investigations */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Guided Workflow for Inventory Investigations</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    To enhance accuracy in high-value inventory investigations, a guided workflow system was developed. This system incorporated standard operating procedures (SOPs) into a structured decision-making process, reducing errors and training time for new investigators.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Features:</Card.Subtitle>
                                <ul>
                                    <li>Interactive workflow with probing questions based on investigation scenarios</li>
                                    <li>Automated decision support system for accurate root cause analysis</li>
                                    <li>Training mode allowing new investigators to practice with real-world cases</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Reduced ramp-up time for new investigators from 12 weeks to a shorter, more efficient training cycle</li>
                                    <li>Improved accuracy in high-value investigations, preventing costly reimbursement errors</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Browser-Based Productivity Enhancements */}
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Browser-Based Productivity Enhancements</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                <Card.Text>
                                    To optimize investigator efficiency, a suite of browser extensions was developed. These scripts enhanced the functionality of existing enterprise tools by introducing automation, UI improvements, and data integration features.
                                </Card.Text>
                                <Card.Subtitle className="mt-3">Features:</Card.Subtitle>
                                <ul>
                                    <li>Custom browser scripts providing additional functionality to enterprise tools</li>
                                    <li>Deployment pipeline using cloud infrastructure for automated packaging and distribution</li>
                                </ul>
                                <Card.Subtitle className="mt-3">Impact:</Card.Subtitle>
                                <ul>
                                    <li>Enhanced investigator productivity by reducing repetitive manual tasks</li>
                                    <li>Improved turnaround time for implementing UI and workflow enhancements</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfessionalProjects;